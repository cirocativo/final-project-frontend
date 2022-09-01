import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

/*
    Tripoli is a generic CSS standard for HTML rendering. 
    Copyright (C) 2007  David Hellsing

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

* {
	text-decoration: none;
	font-size: 1em;
	outline: none;
	padding: 0;
	margin: 0;
	}
code, kbd, samp, pre, tt, var, textarea, 
input, select, isindex, listing, xmp, plaintext {
	white-space: normal;
	font-size: 1em;
	font: inherit;
	}
dfn, i, cite, var, address, em { 
	font-style: normal; 
	}
th, b, strong, h1, h2, h3, h4, h5, h6 { 
	font-weight: normal; 
	}
a, img, a img, iframe, form, fieldset, 
abbr, acronym, object, applet, table {
	border: none; 
	}
table {
	border-collapse: collapse;
	border-spacing: 0;
	}
caption, th, td, center { 
	vertical-align: top;
	text-align: left;
	}
body { 
	background: white; 
	line-height: 1; 
	color: black; 
	}
q { 
	quotes: "" ""; 
	}
ul, ol, dir, menu { 
	list-style: none; 
	}
sub, sup { 
	vertical-align: baseline; 
	}
a { 
	color: inherit; 
	}
hr { 
	display: none; 
	}
font { 
	color: inherit !important; 
	font: inherit !important; 
	color: inherit !important; /* editor's note: necessary? */ 
	}
marquee {
	overflow: inherit !important;
	-moz-binding: none;
	}
blink { 
	text-decoration: none; 
	}
nobr { 
	white-space: normal; 
	}

`;
