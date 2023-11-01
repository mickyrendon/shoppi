import {PropTypes} from "prop-types"

export const Layout = ({children}) => {
    // codigo para que no salga el error '‘children’ is missing inprops validation'
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }     

    return (
        <div className="flex flex-col items-center mt-20 text-2xl font-bold">
            {children}
        </div>
        )
}