import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const Container = (props) => {
	const { children } = props;
	return (
		<Fragment>
			<ContainerWrapper>{children}</ContainerWrapper>
		</Fragment>
	);
};

export default Container;
