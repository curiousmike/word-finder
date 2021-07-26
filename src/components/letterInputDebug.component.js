import React from "react";

function LetterInputDebugComponent(props) {
    const { letters } = props;
    let letterMap = [];
    for (let i = 0; i < letters.length; i++) {
        letterMap.push ({ index: i, value: letters[i], code: letters[i].charCodeAt(0) });
    }
    return (
        <div>
            {letterMap.map(function (letter, index) {
            return <div key={index}>{letter.value} {letter.code}</div>;
            })}
        </div>
    );
}

export default LetterInputDebugComponent;
