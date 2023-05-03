import React, {FC} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music: FC = () => {
  return (<div>
    Music
  </div>);
};

// @ts-ignore
const withRedirectMusic = withAuthRedirect(Music);

export default withRedirectMusic;