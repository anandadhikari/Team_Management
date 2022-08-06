package com.team_management.repository;

import java.util.List;

import com.team_management.model.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    
    List<Member> findByTeamId(Long teamId);
}
