import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings: FC = () => {
  return (<div>
    Settings
  </div>);
};

// @ts-ignore
const withRedirectSettings = withAuthRedirect(Settings);
export default withRedirectSettings;