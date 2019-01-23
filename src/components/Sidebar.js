import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const Card = (props) => {
	const { children } = props;
	return (
		<Fragment>
			<SidebarWrapper>{children}</SidebarWrapper>
		</Fragment>
	);
};

export default Card;
