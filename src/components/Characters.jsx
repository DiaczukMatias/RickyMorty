import React, { useState }  from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


const Characters = ({ character }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };    

    return (
        
        <div className='character'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <div className='info'>

            <Stack direction="row" spacing={1}>
                    <Chip label={character.species} color="primary"  variant="outlined" sx={{width: "5rem"}}/>
                    <Chip label={character.gender} color="success" variant="outlined"  sx={{width: "5rem"}} />
            </Stack>

            {isHovered && (
                    <p style={{ color: character.status === 'Alive' ? 'green' : 'red' }}
                    className='status' >
                        {character.status}
                    </p>
                )}
            </div>
            
        </div>
   
        
    );
};

export default Characters;