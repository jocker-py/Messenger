import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Music: FC = () => {
  return (<div>
    Music
  </div>);
};

export default compose<any>(withAuthRedirect)(Music);