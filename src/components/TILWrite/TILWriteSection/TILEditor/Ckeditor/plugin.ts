import { axiosInstance } from '@/api';

const customUploadAdapter = (loader: any) => {
  return {
    upload() {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        loader.file.then((file: any) => {
          formData.append('image', file);
          axiosInstance
            .post('/image/post', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => {
              resolve({
                default: res.data.result.url,
              });
            })
            .catch((err) => reject(err));
        });
      });
    },
  };
};

function uploadPlugin(editor: any) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
    return customUploadAdapter(loader);
  };
}

export const editorConfiguration = {
  toolbar: [
    'imageUpload',
    'findAndReplace',
    '|',
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'outdent',
    'indent',
    'alignment',
    '|',
    'blockQuote',
    'link',
    'horizontalLine',
    'insertTable',
    'bulletedList',
    'codeBlock',
  ],
  extraPlugins: [uploadPlugin],
};
