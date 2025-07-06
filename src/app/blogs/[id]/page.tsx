import React from 'react'

type Props = {
    params: { id: string };
};

export default function Page(props: Props) {
    
    return (
        <div>page <p>{props.params.id}</p></div>
    )
}
