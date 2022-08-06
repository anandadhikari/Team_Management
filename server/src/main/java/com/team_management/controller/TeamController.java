package com.team_management.controller;

import java.io.IOException;
import java.util.List;

import com.team_management.exception.ResourceNotFoundException;
import com.team_management.model.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team_management.repository.TeamRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/teams/")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    public TeamController() {
    }

    // Create

    @PostMapping("/")
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        try {
            Team t = teamRepository.save(team);
            return new ResponseEntity<>(t, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Read

    @GetMapping("/")
    public List<Team> getTeams() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
        Team team = teamRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This team was not found : " + id));
        return ResponseEntity.ok(team);
    }

    @GetMapping("/name/{name}")
    public List<Team> getTeamByName(@PathVariable String name) {
        List<Team> teams = teamRepository.findByTeamName(name);
        if(teams.isEmpty()) {
            throw new ResourceNotFoundException("Teams(s) with the name "+ name +" not found");
        }
        return teams;
    }

    @GetMapping("/type/{type}")
    public List<Team> getTeamByType(@PathVariable Integer type) {
        List<Team> teams = teamRepository.findByTeamType(type);
        if(teams.isEmpty()) {
            throw new ResourceNotFoundException("Teams(s) with the type "+ type +" not found");
        }
        return teams;
    }

    @GetMapping("/org/{orgId}")
    public List<Team> getTeamByOrgId(@PathVariable Integer orgId) {
        List<Team> teams = teamRepository.findByOrgId(orgId);
        if(teams.isEmpty()) {
            throw new ResourceNotFoundException("Teams(s) with the orgId "+ orgId +" not found");
        }
        return teams;
    }

    // Update
    @PutMapping("/{id}")
	public ResponseEntity<Team> updateStudent(@PathVariable long id, @RequestBody Team team)
	{
		Team t = teamRepository
            .findById(id).orElseThrow(() ->  new ResourceNotFoundException("Team not found."));
        t.setTeamName(team.getTeamName());
        t.setTeamLeader(team.getTeamLeader());
        t.setTeamDescription(team.getTeamDescription());
        t.setTeamType(team.getTeamType());
        t.setOrgId(team.getOrgId());
        Team updatedTeam = teamRepository.save(t);
	    return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
	}

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Team> deleteTeam(@PathVariable long id) {
        try {
            teamRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
