import { GradiantButtonStyles } from './styles';
import { Button } from 'antd';
import styled from 'styled-components';
import { ReactNode } from 'react';


interface GradiantButtonProps {
  children: ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

function GradiantButton({ children, type = 'primary', onClick }: GradiantButtonProps) {
  const StyledButton = styled(Button)`
    ${GradiantButtonStyles.root}
    ${type === 'primary' ? GradiantButtonStyles.primary : GradiantButtonStyles.secondary}
  `;

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

export { GradiantButton }