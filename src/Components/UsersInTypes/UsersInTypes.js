import './UsersInTypes.css'
import { useEffect, useState } from 'react';
import TypesList from './TypesList'
import Masonry from "react-masonry-css";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import { SaveUsers } from '../Users/UsersUtils';
import Chart from 'react-apexcharts'
import { DefaultTypesProps, GetOptionsAndSeries } from './UsersInTypesUtils';
import NumbersOfList from '../NumbersOfList/NumbersOfList';

const breakpointColumnsObj = {
    default: 4,
    1250: 3,
    950: 2,
    700: 1
};



const UsersInTypes = (props) => {

    const [Options, setOptions] = useState({ ...DefaultTypesProps })
    const [TiposUsuarios, setTiposUsuarios] = useState([
        ...props.TiposUsuarios.map(element => {
            var Users = props.Usuarios.filter(el => el.Type.Id === element.Id).length
            return { Id: element.Id, Value: element.Value, Qtd: Users }
        })])


    useEffect(() => {
        setOptions(GetOptionsAndSeries(props.Usuarios, props.TiposUsuarios))
        setTiposUsuarios([
            ...props.TiposUsuarios.map(element => {
                var Users = props.Usuarios.filter(el => el.Type.Id === element.Id).length
                return { Id: element.Id, Value: element.Value, Qtd: Users }
            })])
    }, [props.Usuarios, props.TiposUsuarios])




    const HandleDrag = (Resultado) => {
        if (!Resultado.destination) return;
        const TypeDestinationID = Resultado.destination.droppableId.split("/")[0];
        const UserId = Resultado.draggableId
        const User = props.Usuarios.find(U => U.Id === UserId)
        const IndexOfUser = props.Usuarios.indexOf(User)
        User.Type.Id = TypeDestinationID
        const copiedItems = [...props.Usuarios];
        copiedItems[IndexOfUser] = { ...User }
        SaveUsers(copiedItems)
    }

    return (
        <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>

            <div className='UsersInSetoresContainers'>

                <NumbersOfList Values={TiposUsuarios} />

                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >

                    {props.TiposUsuarios.map((TipoUsuario, Index) => {
                        return <TypesList key={v4()} TipoUsuario={TipoUsuario} Users={props.Usuarios} UserTypes={props.TiposUsuarios} />
                    })}

                </Masonry>
                <Chart options={Options.options} series={Options.series} type="pie" width={400} />
            </div >
        </DragDropContext>
    )
}





const ConnectedUsersInTypes = connect((state) => {
    return {
        Setores: state.Setores,
        Usuarios: state.Usuarios,
        TiposUsuarios: state.TiposUsuarios
    }
})(UsersInTypes)

export default ConnectedUsersInTypes 