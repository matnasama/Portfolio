import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import bootstrapIcon from '../../assets/bootstrap.svg';
import reactIcon from '../../assets/react.svg';
import javascriptIcon from '../../assets/javascript.svg';
import htmlIcon from '../../assets/html5.svg';
import materialIcon from '../../assets/materialui.svg';
import nodeIcon from '../../assets/nodejs.svg';
import netlifyIcon from '../../assets/netlify.svg';
import viteIcon from '../../assets/vite.svg';
import cssIcon from '../../assets/css.svg';

const Skills = () => {
  const elementRef = React.useRef(null);
  const [arrowDisable, setArrowDisable] = React.useState(true);

  const handleHorizontalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance || element.scrollLeft === 0 || element.scrollLeft + element.clientWidth >= element.scrollWidth) {
        clearInterval(slideTimer);
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div className="button-container">
        <button
          onClick={() => {
            handleHorizontalScroll(elementRef.current, 25, 100, -10);
          }}
          style={{ background: 'none', border: 'none', outline: 'none' }}
        >
          <KeyboardArrowLeft sx={{ color: '#76b9e4' }} />
        </button>
        <div className="img-container" ref={elementRef}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Bootstrap" src={bootstrapIcon} />
          <Avatar alt="React Js" src={reactIcon} />
          <Avatar alt="Javascript" src={javascriptIcon} />
          <Avatar alt="Html 5" src={htmlIcon} />
          <Avatar alt="Material UI" src={materialIcon} />
          <Avatar alt="CSS" src={cssIcon} />
          <Avatar alt="Vite" src={viteIcon} />
          <Avatar alt="Node Js" src={nodeIcon} />
          <Avatar alt="Netlify" src={netlifyIcon} />
        </Stack>
      </div>
        <button
          onClick={() => {
            handleHorizontalScroll(elementRef.current, 25, 100, 10);
          }}
          style={{ background: 'none', border: 'none', outline: 'none' }}
        >
          <KeyboardArrowRight sx={{ color: '#76b9e4' }} />
        </button>
      </div>

    </>
  );
};

export default Skills;

