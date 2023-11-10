import ogs from 'open-graph-scraper';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface OpenGraphScraperResult {
  charset?: string;
  favicon?: string;
  ogDate?: string;
  ogDescription?: string;
  ogImage?: OGImage[]; // OGImage 배열의 형태가 어떤지 명확하지 않으므로, OGImage 인터페이스를 추가로 정의하면 좋을 것 같습니다.
  ogLocale?: string;
  ogSiteName?: string;
  ogTitle?: string;
  ogUrl?: string;
  requestUrl?: string;
  success?: boolean;
  twitterCard?: string;
  twitterDescription?: string;
  twitterTitle?: string;
  twitterUrl?: string;
}

interface OGImage {
  url?: string;
  type?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const url = req.body.url;
  try {
    const { result } = await ogs({ url });

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(200).json({ message: 'Page not found' });
  }
}
