package com.examly.springapp.repository;


import  com.examly.springapp.model.DocumentModel;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository extends JpaRepository<DocumentModel,Integer> {
    List<DocumentModel> findByUserEmail(String email);

    boolean existsBydocumentid(Integer id);

    void deleteBydocumentid(Integer id);
}