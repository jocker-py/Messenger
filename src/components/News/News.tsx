import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const News: FC = () => {
  return (<div>
    News
  </div>);
};

export default compose<any>(withAuthRedirect)(News);