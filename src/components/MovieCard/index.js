import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';

const MovieCardParent = styled.div`
	position: relative;
	flex: 0 0 17%;
	display: flex;
	justify-content: space-around;
	margin: 1em;
    transition: transform 0.3s ease;
	color: white;

    :hover {
        cursor: pointer;
		transform: scale(1.1);
		z-index: 2;
	}
	@media screen and (max-width: 1440px) {
		flex: 1 0 15%;
	}
	@media screen and (max-width: 720px) {
		flex: 0 0 25%;
	}
	@media screen and (max-width: 540px) {
		flex: 1 0 33%;
	}
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MovieCard = ({ movie, secureBaseUrl, posterSize }) => (
	<>
		{/* check that movie is defined in state before rendering */}
		{movie && (
			<MovieCardParent onClick={() => console.log(get(movie, 'id'))}>
			<StyledImg
				src={`${secureBaseUrl}${posterSize}/${get(movie, 'poster_path')}`}
			/>
			</MovieCardParent>
		)}
	</>
)

const mapStateToProps = (state, props) => {
	const data = get(state, 'movies.data');
	const imagesConfig = get(state, 'config.images')
	
    return {
		movie: data[props.id] || null,
		secureBaseUrl: get(imagesConfig, 'secure_base_url'),
		posterSize: get(imagesConfig, 'poster_sizes[3]')
    }
}
export default connect(mapStateToProps, null)(MovieCard)

