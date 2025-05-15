import React, {ReactNode} from 'react';

interface IContainerProps {
    children: ReactNode;
    className?: string;
}


const Container: React.FC<IContainerProps> = ({children, className = ""}) => {
    return (
        <div className={`max-w-7xl p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Container;
