import { IconContext } from 'react-icons';
import { data } from '../data';
import styled from 'styled-components';
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Accordion = () => {
   const [clicked, setClicked] = useState(false);

   const toggle = (index) => {
      if (clicked === index) {
         setClicked(null);
      }
      setClicked(index);
   };

   return (
      <IconContext.Provider value={{ color: '00ffb9', size: '25px' }}>
         <AccordionSection>
            <Container>
               {data?.map(({ question, answer }, index) => (
                  <>
                     <Wrap onClick={() => toggle(index)} key={index}>
                        <h1>{question}</h1>
                        <span>
                           {clicked === index ? <FiMinus /> : <FiPlus />}
                        </span>
                     </Wrap>
                     {clicked === index ? (
                        <Dropdown>
                           <p>{answer}</p>
                        </Dropdown>
                     ) : null}
                  </>
               ))}
            </Container>
         </AccordionSection>
      </IconContext.Provider>
   );
};

const AccordionSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #fff;
   position: relative;
   height: 100vh;
`;

const Container = styled.div`
   position: absolute;
   top: 30%;
   box-shadow: 2px 10px 35px 1px rgba(150, 150, 150, 0.3);
`;

const Wrap = styled.div`
   background: #272727;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   text-align: center;
   cursor: pointer;

   h1 {
      padding: 2rem;
      font-size: 2rem;
   }

   span {
      margin-right: 1.5rem;
   }
`;

const Dropdown = styled.div`
   background: #1c1c1c;
   color: #00ffb9;
   width: 100%;
   height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-top: 1px solid #00ffb9;
   border-bottom: 1px solid #00ffb9;

   p {
      font-size: 2rem;
   }
`;

export default Accordion;
