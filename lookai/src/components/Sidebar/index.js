import React from 'react'
import {
       SidebarContainer,
       Icon,
       CloseIcon,
       SideBtnWrap,
       SidebarMenu,
       SidebarRoute,
       SidebarWrapper,
       SidebarLink,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="scope" onClick={toggle}>
              Project Scope
            </SidebarLink>
            <SidebarLink to="milestone" onClick={toggle}>
              milestones
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Documents
            </SidebarLink>
            <SidebarLink to="presentation" onClick={toggle}>
              Presentations
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About Us
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact Us
            </SidebarLink>
          </SidebarMenu>

          {/* <SideBtnWrap>
            <SidebarRoute onClick={toggle}>Close</SidebarRoute>
          </SideBtnWrap> */}
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
