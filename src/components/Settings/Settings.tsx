import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Settings: FC = () => {
  return (<div>
    Settings
  </div>);
};

export default compose<any>(withAuthRedirect)(Settings)