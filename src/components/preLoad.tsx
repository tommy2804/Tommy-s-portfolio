interface PreLoadProps {
  load?: Boolean;
}

enum LoaderId {
  PRELOADER = 'preloader',
  PRELOADER_NONE = 'preloader-none',
}

function Pre(props: PreLoadProps) {
  return <div id={props.load ? LoaderId.PRELOADER : LoaderId.PRELOADER_NONE}></div>;
}

export default Pre;
