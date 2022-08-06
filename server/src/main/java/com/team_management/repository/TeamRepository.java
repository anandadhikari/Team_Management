package com.team_management.repository;

import com.team_management.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    List<Team> findByTeamName(String name);

    List<Team> findByTeamType(Integer type);

    List<Team> findByOrgId(Integer ordId);
}
