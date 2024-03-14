import { ReactNode } from "react";
import { TopStyles } from "./styles";
import styled from "styled-components";


function TopSection({ children }: { children: ReactNode }) {
    const StyledTopSection = styled.main`
        ${TopStyles}
    `;
  return (
    <StyledTopSection>
      {children}
    </StyledTopSection>
  );
} 

export { TopSection }