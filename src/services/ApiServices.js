import axios from "axios";

const TEAMS_REST_API_URL = 'http://localhost:8080/api/v1/teams';
const MEMBERS_REST_API_URL = 'http://localhost:8080/api/v1/members';
const ORGANIZATIONS_REST_API_URL = 'http://localhost:8080/api/v1/organizations';

class ApiServices {

    // Methods for teams

    createTeam(team) {
        return axios.post(`${TEAMS_REST_API_URL}/`, team)
    }

    getTeams = () => {
        return axios.get(`${TEAMS_REST_API_URL}/`);
    }
    
    getTeamById = (id) => {
        return axios.get(`${TEAMS_REST_API_URL}/${id}`)
    }

    getTeamByName = (name) => {
        return axios.get(`${TEAMS_REST_API_URL}/name/${name}`)
    }

    getTeamByType = (type) => {
        return axios.get(`${TEAMS_REST_API_URL}/type/${type}`)
    }

    getTeamByOrgId = (orgId) => {
        return axios.get(`${TEAMS_REST_API_URL}/org/${orgId}`)
    }

    updateTeam(id, team) {
        return axios.put(`${TEAMS_REST_API_URL}/${id}`);
    }

    deleteTeam(id) {
        return axios.delete(`${TEAMS_REST_API_URL}/${id}`);
    }

    // Methods for members

    createMember(member) {
        return axios.post(`${MEMBERS_REST_API_URL}/`, member);
    }

    getMembers = () => {
        return axios.get(`${MEMBERS_REST_API_URL}/`)
    }

    getMemberById = (id) => {
        return axios.get(`${MEMBERS_REST_API_URL}/${id}`)
    }

    getMembersByTeamId = (teamId) => {
        return axios.get(`${MEMBERS_REST_API_URL}/team/${teamId}`)
    }

    updateMember(id, member) {
        return axios.put(`${MEMBERS_REST_API_URL}/${id}`, member)
    }

    deleteMember(id) {
        return axios.delete(`${MEMBERS_REST_API_URL}/${id}`);
    }
    
    // Methods for organizations

    getOrganizations = () => {
        axios.get(`${ORGANIZATIONS_REST_API_URL}/`);
    }

    getOrganizationById = (id) => {
        return axios.get(`${ORGANIZATIONS_REST_API_URL}/${id}`)
    }
}

export default new ApiServices();