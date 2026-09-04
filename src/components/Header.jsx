



// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import useRouter from 'next/navigation';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const router = useRouter();

//   const menuItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Story', href: '#story' },
//     { name: 'Impact', href: '#impact' },
//     { name: 'Events', href: '#events' },
//     { name: 'Team', href: '#team' },
//     { name: 'Donate', href: '#donate' },
//     { name: 'Gallery', href: '#gallery' },
//     { name: 'Reviews', href: '#reviews' },
//     { name: 'Forms', href: '#forms' },
//     { name: 'School Fees', href: '#school-fees' },
//     { name: 'Contact', href: '#contact' },
//     { name: "Elizabeth's Story", href: '#elizabeths-story' },
//     { name: 'Blue Bird Memorial', href: '/blue-bird-memorial' },
//   ];

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   // Handle smooth scroll for anchor links
//   const handleNavClick = (e, href) => {
//     if (href.startsWith('#')) {
//       e.preventDefault();
//       const targetElement = document.querySelector(href);
//       if (targetElement) {
//         targetElement.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       }
//     }
//     setIsOpen(false);
//   };

//   return (
//     <NavContainer ref={menuRef}>
//       <NavContent>
//         {/* Logo Section */}
//         <LogoLink 
//           href="#home" 
//           onClick={(e) => handleNavClick(e, '#home')}
//         >
//           <Image 
//             src="/logo.jpg" 
//             alt="The Elizabeth Foundation Logo" 
//             width={40} 
//             height={40} 
//             priority
//           />
//         </LogoLink>

//         {/* Desktop Navigation Menu */}
//         <MenuList>
//           {menuItems.map((item, index) => (
//             <MenuItem key={index}>
//               <MenuLink 
//                 href={item.href} 
//                 onClick={(e) => {handleNavClick(e, item.href), router.push('/')}}
//               >
//                 {item.name}
//               </MenuLink>
//             </MenuItem>
//           ))}
//         </MenuList>

//         {/* Desktop Apply Now Button */}
//         <ApplyButtonDesktop 
//           href="#forms" 
//           onClick={(e) => handleNavClick(e, '#forms')}
//         >
//           Apply Now
//         </ApplyButtonDesktop>

//         {/* Mobile Hamburger Button */}
//         <HamburgerButton 
//           onClick={() => setIsOpen(!isOpen)} 
//           aria-label="Toggle Menu"
//         >
//           <HamburgerLine open={isOpen} />
//           <HamburgerLine open={isOpen} />
//           <HamburgerLine open={isOpen} />
//         </HamburgerButton>
//       </NavContent>

//       {/* Mobile Menu Dropdown / Overlay */}
//       <MobileMenuOverlay open={isOpen}>
//         <MobileMenuList>
//           {menuItems.map((item, index) => (
//             <MobileMenuItem key={index}>
//               <MobileMenuLink 
//                 href={item.href} 
//                 onClick={(e) => handleNavClick(e, item.href)}
//               >
//                 {item.name}
//               </MobileMenuLink>
//             </MobileMenuItem>
//           ))}
//           <MobileMenuItem>
//             <ApplyButtonMobile 
//               href="#forms" 
//               onClick={(e) => handleNavClick(e, '#forms')}
//             >
//               Apply Now
//             </ApplyButtonMobile>
//           </MobileMenuItem>
//         </MobileMenuList>
//       </MobileMenuOverlay>
//     </NavContainer>
//   );
// };

// export default Header;

// // --- Styled Components ---

// const NavContainer = styled.header`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background-color: #ffffff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//   z-index: 1000;
//   padding: 12px 24px;
//   scroll-behavior: smooth;
// `;

// const NavContent = styled.nav`
//   max-width: 1440px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 16px;
// `;

// const LogoLink = styled.a`
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;
//   cursor: pointer;
// `;

// const MenuList = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   gap: 20px;
//   margin: 0;
//   padding: 0;
//   overflow-x: auto;
//   white-space: nowrap;

//   /* Hide scrollbar for clean design */
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   scrollbar-width: none;

//   @media (max-width: 1100px) {
//     display: none;
//   }
// `;

// const MenuItem = styled.li`
//   display: inline-block;
// `;

// const MenuLink = styled.a`
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 500;
//   color: #334155;
//   text-decoration: none;
//   transition: color 0.2s ease;
//   cursor: pointer;

//   &:hover {
//     color: #881313;
//   }
// `;

// const ApplyButtonDesktop = styled.a`
//   background-color: #7f1d1d;
//   color: #ffffff;
//   font-size: 14px;
//   font-weight: 600;
//   padding: 10px 24px;
//   border-radius: 50px;
//   text-decoration: none;
//   flex-shrink: 0;
//   transition: background-color 0.2s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: #601010;
//   }

//   @media (max-width: 1100px) {
//     display: none;
//   }
// `;

// const HamburgerButton = styled.button`
//   display: none;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 28px;
//   height: 20px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 1010;

//   @media (max-width: 1100px) {
//     display: flex;
//   }
// `;

// const HamburgerLine = styled.span`
//   width: 100%;
//   height: 2.5px;
//   background-color: #334155;
//   border-radius: 2px;
//   transition: all 0.3s ease;

//   &:nth-child(1) {
//     transform: ${(props) => (props.open ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
//   }
//   &:nth-child(2) {
//     opacity: ${(props) => (props.open ? '0' : '1')};
//   }
//   &:nth-child(3) {
//     transform: ${(props) => (props.open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
//   }
// `;

// const MobileMenuOverlay = styled.div`
//   display: none;

//   @media (max-width: 1100px) {
//     display: flex;
//     position: fixed;
//     top: 65px;
//     left: 0;
//     width: 100vw;
//     height: calc(100vh - 65px);
//     background-color: #ffffff;
//     flex-direction: column;
//     padding: 24px;
//     overflow-y: auto;
//     transition: transform 0.3s ease, opacity 0.3s ease;
//     transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
//     opacity: ${(props) => (props.open ? '1' : '0')};
//     pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
//     box-shadow: 0 10px 20px rgba(0,0,0,0.05);
//   }
// `;

// const MobileMenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   align-items: center;
//   text-align: center;
// `;

// const MobileMenuItem = styled.li`
//   width: 100%;
// `;

// const MobileMenuLink = styled.a`
//   font-size: 16px;
//   font-weight: 600;
//   color: #334155;
//   text-decoration: none;
//   display: block;
//   padding: 8px 0;
//   transition: color 0.2s ease;
//   cursor: pointer;

//   &:hover {
//     color: #7f1d1d;
//   }
// `;

// const ApplyButtonMobile = styled.a`
//   display: inline-block;
//   background-color: #7f1d1d;
//   color: #ffffff;
//   font-size: 15px;
//   font-weight: 700;
//   padding: 12px 32px;
//   border-radius: 50px;
//   text-decoration: none;
//   margin-top: 10px;
//   transition: background-color 0.2s ease;
//   cursor: pointer;

//   &:hover {
//     background-color: #601010;
//   }
// `;



'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Story', href: '#story' },
    { name: 'Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Donate', href: '#donate' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Forms', href: '#forms' },
    { name: 'Contact', href: '#contact' },
    { name: 'School Fees', href: '/school-fees-support' },
    
    { name: "Elizabeth's Story", href: '/elizabeth-story' },
    { name: 'Blue Bird Memorial', href: '/blue-bird-memorial' },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle auto-scroll on landing page if navigated with a hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [pathname]);

  // Handle smooth scroll or cross-page routing for anchor links
  const handleNavClick = (e, href) => {
    setIsOpen(false);

    // If it's a direct page link (e.g. /blue-bird-memorial)
    if (!href.startsWith('#')) {
      return; // Let standard Next.js Link routing handle it if wrapped, or router.push
    }

    e.preventDefault();

    if (pathname !== '/') {
      // If we are not on the landing page, navigate to the landing page with the hash
      router.push(`/${href}`);
    } else {
      // If we are already on the landing page, just scroll smoothly
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <NavContainer ref={menuRef}>
      <NavContent>
        {/* Logo Section */}
        <LogoLink 
          href="/" 
          onClick={(e) => {
            if (pathname !== '/') {
              router.push('/');
            } else {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false);
          }}
        >
          <Image 
            src="/logo.jpg" 
            alt="The Elizabeth Foundation Logo" 
            width={40} 
            height={40} 
            priority
          />
        </LogoLink>

        {/* Desktop Navigation Menu */}
        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <MenuLink 
                href={item.href} 
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    handleNavClick(e, item.href);
                  } else {
                    setIsOpen(false);
                    router.push(item.href);
                  }
                }}
              >
                {item.name}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>

        {/* Desktop Apply Now Button */}
        <ApplyButtonDesktop 
          href="#forms" 
          onClick={(e) => handleNavClick(e, '#forms')}
        >
          Apply Now
        </ApplyButtonDesktop>

        {/* Mobile Hamburger Button */}
        <HamburgerButton 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          <HamburgerLine open={isOpen} />
          <HamburgerLine open={isOpen} />
          <HamburgerLine open={isOpen} />
        </HamburgerButton>
      </NavContent>

      {/* Mobile Menu Dropdown / Overlay */}
      <MobileMenuOverlay open={isOpen}>
        <MobileMenuList>
          {menuItems.map((item, index) => (
            <MobileMenuItem key={index}>
              <MobileMenuLink 
                href={item.href} 
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    handleNavClick(e, item.href);
                  } else {
                    setIsOpen(false);
                    router.push(item.href);
                  }
                }}
              >
                {item.name}
              </MobileMenuLink>
            </MobileMenuItem>
          ))}
          <MobileMenuItem>
            <ApplyButtonMobile 
              href="#forms" 
              onClick={(e) => handleNavClick(e, '#forms')}
            >
              Apply Now
            </ApplyButtonMobile>
          </MobileMenuItem>
        </MobileMenuList>
      </MobileMenuOverlay>
    </NavContainer>
  );
};

export default Header;

// --- Styled Components ---

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 12px 24px;
  scroll-behavior: smooth;
`;

const NavContent = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
`;

const MenuLink = styled.a`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #881313;
  }
`;

const ApplyButtonDesktop = styled.a`
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 50px;
  text-decoration: none;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #601010;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1010;

  @media (max-width: 1100px) {
    display: flex;
  }
`;

const HamburgerLine = styled.span`
  width: 100%;
  height: 2.5px;
  background-color: #334155;
  border-radius: 2px;
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${(props) => (props.open ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }
  &:nth-child(2) {
    opacity: ${(props) => (props.open ? '0' : '1')};
  }
  &:nth-child(3) {
    transform: ${(props) => (props.open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;

const MobileMenuOverlay = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: flex;
    position: fixed;
    top: 65px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 65px);
    background-color: #ffffff;
    flex-direction: column;
    padding: 24px;
    overflow-y: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
`;

const MobileMenuItem = styled.li`
  width: 100%;
`;

const MobileMenuLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #334155;
  text-decoration: none;
  display: block;
  padding: 8px 0;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #7f1d1d;
  }
`;

const ApplyButtonMobile = styled.a`
  display: inline-block;
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 10px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #601010;
  }
`;