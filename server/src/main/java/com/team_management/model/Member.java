package com.team_management.model;

import java.sql.Timestamp;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "job_position")
    private String jobPosition;

    @Column(name = "start_date")
    private Timestamp startDate;

    @Column(name = "is_remote")
    private boolean isRemote;

    @Column(name = "location")
    private String location;

    @Column(name = "native_language")
    private int nativeLanguage;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "team_position")
    private String teamPosition;

    @Column(name = "phone_number")
    private long phoneNumber;

    @Column(name = "complete_name")
    private String completeName;

    // @ManyToOne
    // private Team team;

    @Column(name = "email")
    private String email;

    @Column(name = "team_id")
    private Long teamId;

    public Member() {

    }

    public Member(long id, String firstName, String lastName, String address, String jobPosition, Timestamp startDate, boolean isRemote, String location, int nativeLanguage, String profileImg, String teamPosition, int phoneNumber, String completeName, String email, Long teamId) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.jobPosition = jobPosition;
        this.startDate = startDate;
        this.isRemote = isRemote;
        this.location = location;
        this.nativeLanguage = nativeLanguage;
        this.profileImg = profileImg;
        this.teamPosition = teamPosition;
        this.phoneNumber = phoneNumber;
        this.completeName = completeName;
        //this.team = team;
        this.email = email;
        this.teamId = teamId;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getJobPosition() {
        return this.jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public Timestamp getStartDate() {
        return this.startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public boolean isIsRemote() {
        return this.isRemote;
    }

    public boolean getIsRemote() {
        return this.isRemote;
    }

    public void setIsRemote(boolean isRemote) {
        this.isRemote = isRemote;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getNativeLanguage() {
        return this.nativeLanguage;
    }

    public void setNativeLanguage(int nativeLanguage) {
        this.nativeLanguage = nativeLanguage;
    }

    public String getProfileImg() {
        return this.profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public String getTeamPosition() {
        return this.teamPosition;
    }

    public void setTeamPosition(String teamPosition) {
        this.teamPosition = teamPosition;
    }

    public long getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCompleteName() {
        return this.completeName;
    }

    public void setCompleteName(String completeName) {
        this.completeName = completeName;
    }

    // public Team getTeam() {
    //     return this.team;
    // }

    // public void setTeam(Team team) {
    //     this.team = team;
    // }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getTeamId() {
        return this.teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Member)) {
            return false;
        }
        Member member = (Member) o;
        return id == member.id && Objects.equals(firstName, member.firstName) && Objects.equals(lastName, member.lastName) && Objects.equals(address, member.address) && Objects.equals(jobPosition, member.jobPosition) && Objects.equals(startDate, member.startDate) && isRemote == member.isRemote && Objects.equals(location, member.location) && Objects.equals(nativeLanguage, member.nativeLanguage) && Objects.equals(profileImg, member.profileImg) && Objects.equals(teamPosition, member.teamPosition) && phoneNumber == member.phoneNumber && Objects.equals(completeName, member.completeName) && Objects.equals(email, member.email) && Objects.equals(teamId, member.teamId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, address, jobPosition, startDate, isRemote, location, nativeLanguage, profileImg, teamPosition, phoneNumber, completeName, email, teamId);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + id + "'" +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", address='" + getAddress() + "'" +
            ", jobPosition='" + getJobPosition() + "'" +
            //", team='" + getTeam() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", isRemote='" + isIsRemote() + "'" +
            ", location='" + getLocation() + "'" +
            ", nativeLanguage='" + getNativeLanguage() + "'" +
            ", profileImg='" + getProfileImg() + "'" +
            ", teamPosition='" + getTeamPosition() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            ", completeName='" + getCompleteName() + "'" +
            //", team='" + getTeam() + "'" +
            ", email='" + getEmail() + "'" +
            ", email='" + getTeamId() + "'" +
            "}";
    }
}
