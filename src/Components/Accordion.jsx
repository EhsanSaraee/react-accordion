import { IconContext } from 'react-icons';
import { data } from '../data';
import styled from 'styled-components';

const Accordion = () => {
   return (
      <IconContext.Provider value={{ color: '00ffb9', size: '25px' }}>
         <AccordionSection>
            <Container>
               {data?.map(({ question, answer }) => (
                  <>
                     <Wrap>
                        <h1>{question}</h1>
                     </Wrap>
                     <p>{answer}</p>
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
`;

export default Accordion;
