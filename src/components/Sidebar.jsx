import { Svgs } from './Svgs';
import { Link } from "react-router-dom";

/**
 * @NavLinks receives two props, title and icon
 * using template literal, we concatenate props.icon with svg's link to retrieve desired icon
 */

const NavLinks = (props) => {
  return (
    <li className="heading-secondary">      
      <Link className="navigation__nav--elements" to={props.NavLinks}>
        <Svgs icon={props.icon} title="small-svg" />
        <span className="navigation__nav--hide-on-tab">{props.title}</span>
      </Link>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <section id="sidebar" className="sidebar">
      <div id="navigation" className="navigation">
      
        <ul className="navigation__nav">

          <NavLinks icon="work" title="Jobs" NavLinks="/"/>
          <NavLinks icon="tool" title="Tool" NavLinks="/tools"/>
          <NavLinks icon="materials" title="Materials" NavLinks="/Materials"/>
          <div className="line"></div>
          <NavLinks icon="setting" title="Setting" NavLinks="/Setting"/>
          <NavLinks icon="log" title="Logs" NavLinks="/Logs"/>
          <div className="line"></div>
          <li class="heading-secondary">
              <input type="checkbox" id="auto-detect" Style="display: none" />
              <label for="auto-detect" class="navigation__nav--btn">
                <span class="navigation__nav--hide-on-tab"> Auto detect </span>
                 <Svgs title="big-svg on" icon="toggle-on" />
                 <Svgs title="big-svg off" icon="toggle-off"/>
              </label>
            </li>
        </ul>
      </div>
    </section>
  );
};
