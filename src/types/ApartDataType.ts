type TInfo = {
  title?: string;
  subTitle?: string;
  address?: string;
};

type TAptInfo = {
  desgnr?: string;
  cnstEntrprs?: string;
  sprvsr?: string;
};

type TBuildInfo = {
  buildStru?: string;
  defctRsn?: string;
};

type TSplmnInfo = {
  reinfStatus?: number;
  reinfContent?: string;
};

export type TAPartDataType = {
  info: TInfo;
  aptInfo: TAptInfo;
  buildInfo: TBuildInfo;
  splmnInfo: TSplmnInfo;
};
