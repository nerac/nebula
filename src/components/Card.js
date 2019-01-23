import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.div;

const CardWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const Card = (props) => {
	const { title, children } = props;
	return (
		<Fragment>
			<CardWrapper>
				{title && (
					<Title>
						<strong>{title}</strong>
					</Title>
				)}
				{children}
			</CardWrapper>
		</Fragment>
	);
};

export default Card;
