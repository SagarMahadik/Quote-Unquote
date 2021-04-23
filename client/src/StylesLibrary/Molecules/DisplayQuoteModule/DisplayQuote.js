import React, { useState, CSSProperties, useEffect, useRef } from "react";
import {
	QuotationRight,
	QuotationLeft,
	QuoteContainer,
	QuotationSymbolText,
	QuoteText,
} from "StylesLibrary/Atoms/DisplayQuoteModule/DisplayQuote/DisplayQuote.js";

const DisplayQuote = () => {
	return (
		<QuoteContainer>
			<QuotationLeft>
				<QuotationSymbolText>&#8220;</QuotationSymbolText>
			</QuotationLeft>
			<div>
				<QuoteText>Just for Fun</QuoteText>
			</div>

			<QuotationRight>
				<QuotationSymbolText>&#8221;</QuotationSymbolText>
			</QuotationRight>
		</QuoteContainer>
	);
};

export default DisplayQuote;
