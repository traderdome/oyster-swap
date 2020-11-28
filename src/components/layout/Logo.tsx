import React from 'react';
import { SvgIconProps, useTheme } from '@material-ui/core';

const Logo = (props: SvgIconProps) => {
	const theme = useTheme();
	return (
		<>
			<svg
				version="1.1"
				id="logo-traderdome"
				x="0px"
				y="0px"
				width={props.width}
				height={props.height}
				viewBox="0 0 792 792"
			>
				<g style={{ fill: theme.palette.primary.main }}>
					<path
						className="st0"
						d="M360,718.02c11.82,1.31,23.83,1.98,36,1.98c12.17,0,24.18-0.67,36-1.98l0,72.36
		c-11.86,1.07-23.87,1.61-36,1.61c-12.14,0-24.14-0.55-36-1.61L360,718.02z"
					/>
					<g>
						<path
							className="st0"
							d="M288,701.56c22.93,8.1,47.04,13.7,72,16.46l0,72.36c-24.73-2.23-48.8-6.73-72-13.29L288,701.56z M648,701.48
			c-22.11,18.26-46.24,34.17-72,47.34l0-83.38c27.13-18.16,51.37-40.32,71.87-65.62L648,701.48z M71.99,623.73
			C26.64,559.32,0,480.77,0,396C0,177.3,177.3,0,396,0s396,177.3,396,396c0,84.77-26.64,163.32-72,227.74L720,396
			c0-178.94-145.06-324-324-324S72,217.06,72,396L71.99,623.73z M144.12,599.82c20.5,25.3,44.74,47.46,71.87,65.62l0,83.38
			c-25.74-13.16-49.86-29.06-71.96-47.3L144.12,599.82z M504,777.09c-23.2,6.56-47.27,11.06-72,13.29l0-72.36
			c24.96-2.76,49.07-8.36,72-16.46L504,777.09z"
						/>
						<rect x="432" y="184" className="st0" width="72" height="552" />
						<rect x="288" y="184" className="st0" width="72" height="544" />
						<path
							className="st0"
							d="M360,219.6c-82.16,16.68-144,89.32-144,176.4h-72c0-126.95,93.88-231.98,216-249.45L360,219.6z M432,146.55
			C554.12,164.02,648,269.05,648,396h-33.37H576c0-86.98-61.7-159.56-143.72-176.34L432,146.55z"
						/>
						<rect x="576" y="392" className="st0" width="72" height="296" />
						<rect x="144" y="392" className="st0" width="72" height="296" />
					</g>
				</g>
			</svg>
		</>
	);
};

export default Logo;
