import React, { useEffect, useState } from "react";
import { getSystemInfo } from "../../utils/systemInfo";
import Battery from "../../assets/svg/battery";
import Wifi from "../../assets/svg/wifi";
import Charge from "../../assets/svg/charge";

type Props = {};

type SystemInfo = {
  battery: any;
  connectionType: string;
};

const Header = (props: Props) => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>({
    battery: {},
    connectionType: "",
  });

  useEffect(() => {
    (async function anyNameFunction() {
      const data = await getSystemInfo()<SystemInfo>;
      if (data) setSystemInfo(data);
    })();
  }, []);

  let date = new Date();
  let now = `${date.getHours()}:${date.getMinutes()}`;

  var hours = date.getHours();

  var ampm = hours >= 12 ? "PM" : "AM";

  return (
    <header className="sticky top-0 flex justify-between p-2 ">
      <div className="flex gap-2">
        <Wifi />
        {/* <p>{systemInfo.connectionType}</p> */}
      </div>

      <div className="time">
        <p>
          {now + " "}
          <small>{ampm}</small>
        </p>
      </div>
      <div className="flex gap-2">
        <Battery />
        <span className="flex gap-1">
          <p>{systemInfo?.battery?.charging ? <Charge /> : null}</p>
          <p>{systemInfo?.battery?.level * 100 + " "}%</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
