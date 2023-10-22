import axios from 'axios';

const customUploadAdapter = (loader: any) => {
  return {
    upload() {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        loader.file.then((file: any) => {
          formData.append('image', file);
          formData.append('key', '6a18ed9fbcb9bcdac5cfe389fd389fdc');
          axios
            .post('https://api.imgbb.com/1/upload', formData)
            .then((res) => {
              resolve({
                default: res.data.data.url,
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
