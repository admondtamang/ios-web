import React from "react";

type Props = { link: string };

const PreviewApp = (props: Props) => {
  return (
    <div>
      PreviewApp
      <embed className="h-full w-full " src={"http://info.cern.ch/"} />
    </div>
  );
};

export default PreviewApp;
