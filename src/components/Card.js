import React from 'react';
import 'tachyons';


const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${ id }`} width='200' height='200' />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>

        </div>

    );

}

/*
class Card extends Component {
    render() {
        return (
            <div>
            
            
            </div>
            
            
        );

    }


}
*/

export default Card;