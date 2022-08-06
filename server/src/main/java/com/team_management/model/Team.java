package com.team_management.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "team_name")
    private String teamName;

    @Column(name = "team_leader")
    private int teamLeader;

    @Column(name = "team_description")
    private String teamDescription;
    
    @Column(name = "team_type")
    private int teamType;
    
    @Column(name = "org_id")
    private int orgId;

    // @OneToMany
    // @JoinTable(name = "teams_members",
    //     joinColumns = @JoinColumn(name = "team_id", referencedColumnName = "id"),
    //     inverseJoinColumns = @JoinColumn(name = "member_id", referencedColumnName = "id"))
    // private List<Member> members;

    public Team() {

    }

    public Team(String teamName, int teamLeader, String teamDescription, int teamType, int orgId) {
        super();
        this.teamName = teamName;
        this.teamLeader = teamLeader;
        this.teamDescription = teamDescription;
        this.teamType = teamType;
        this.orgId = orgId; 
        //this.members = members;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTeamName() {
        return this.teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getTeamLeader() {
        return this.teamLeader;
    }

    public void setTeamLeader(int teamLeader) {
        this.teamLeader = teamLeader;
    }

    public String getTeamDescription() {
        return this.teamDescription;
    }

    public void setTeamDescription(String teamDescription) {
        this.teamDescription = teamDescription;
    }

    public int getTeamType() {
        return this.teamType;
    }

    public void setTeamType(int teamType) {
        this.teamType = teamType;
    }

    public int getOrgId() {
        return this.orgId;
    }

    public void setOrgId(int orgId) {
        this.orgId = orgId;
    }

    // public List<Member> getMembers() {
    //     return this.members;
    // }

    // public void setMembers(List<Member> members) {
    //     this.members = members;
    // }

  
}