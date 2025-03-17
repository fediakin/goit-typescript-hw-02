export type Urls = {
  regular: string;
  small: string;
};

export interface Images {
  id: string;
  alt_description: string;
  urls: Urls;
}
