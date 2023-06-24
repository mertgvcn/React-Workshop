import React from 'react';

//? functional component -> statik olan, state almayan componentlar için kullanılabilir. Prop (parametre) de alabilir. 
//* rfc + tab yapınca bu temel yapı otomatik oluşuyor

const Navbar = (props) => { //functional componentlarda prop alırken fonksiyonda parametre olarak belirtmek gerekiyor
    return (
        <div style={{width: "100%", height:"50px", backgroundColor: "red"}}>
            {props.title}
        </div>
    )
}

export default Navbar;