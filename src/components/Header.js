import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	height: 100%;
	width: 100%;
`;
const Header = (props) => {
	const { children } = props;
	return (
		<Fragment>
			<HeaderWrapper>{children}</HeaderWrapper>
		</Fragment>
	);
};

export default Header;
