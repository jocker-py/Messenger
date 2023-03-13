import React from "react";

const Navbar = () => {
  const links = ['Profile', 'Messages', 'News', 'Music', 'Settings'];
  return (
    <nav className='nav'>
      {links.map((title, idx) => <Link key={idx} title={title} />)}
    </nav>
  );
}

type NavbarLinkPropsType = {
  title: string;
};

function Link(props:NavbarLinkPropsType){
  return <div><a href="#">{props.title}</a></div>
}

export default Navbar;