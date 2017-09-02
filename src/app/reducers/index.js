import { combineReducers } from 'redux';
import projects from './projects';
import entity from './entity';
import phase from './phase';
import entities from './entities';

const rootReducer = combineReducers({
    projs: projects,
    entity: entity,
    phase: phase,
    entities: entities
});

export default rootReducer;