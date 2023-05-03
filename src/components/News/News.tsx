import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News: FC = () => {
  return (<div>
    News
  </div>);
};

// @ts-ignore
const withRedirectNews = withAuthRedirect(News);

export default withRedirectNews;