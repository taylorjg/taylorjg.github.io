import { StyledSlowLoad } from "./slow-load.styles";

// https://emojipedia.org/warning/
const WARNING_SIGN_EMOJI = "\u{26A0}\u{FE0F}";

export const SlowLoad = () => {
  return (
    <StyledSlowLoad>
      {WARNING_SIGN_EMOJI} Please be patient - the website may take a while to
      load because I am using Render&apos;s{" "}
      <a href="https://render.com/docs/free#free-web-services">
        Free Web Services
      </a>{" "}
      <span>tier</span>
    </StyledSlowLoad>
  );
};
