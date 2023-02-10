import React from "react";
import Icon1 from "../../images/svg-3.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-7.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Identity Verification</ServicesH2>
          <ServicesP>
            We help identify individuals, registered companies to eliminate fraudulent practices.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Data Sorting</ServicesH2>
          <ServicesP>
            We can help users filter employee data, from active, inactive, gender, etc 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>User Status</ServicesH2>
          <ServicesP>
            We can help organizations, determine registered companies and tax payers etc.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
