package com.examly.springapp.controller;

import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.repository.DocumentRepository;
import com.examly.springapp.service.DocumentStorage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;
import java.util.Optional;

@RestController
public class DocumentController {

    @Autowired
    DocumentStorage documentStorage;

    @Autowired
    DocumentRepository documentRepository;


    @PostMapping("/user/addDocuments")
    public ResponseEntity<DocumentModel> uploadDocument(@RequestParam("file") MultipartFile file, Authentication authentication) {
        String username = authentication.getName();
        DocumentModel savedFile = documentStorage.saveDoc(file, username);
        return new ResponseEntity<>(savedFile, HttpStatus.CREATED);
    }

    @GetMapping("/user/getDocuments")
    public ResponseEntity<List<DocumentModel>> getDocuments(Authentication authentication) {

        String username = authentication.getName();

        List<DocumentModel> documents = documentStorage.getDocumentByUser(username);

        if (documents.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }

    @PutMapping("/user/editDocuments/{documentid}")
    public ResponseEntity<DocumentModel> updateDocument(@PathVariable("documentid") Integer id, @RequestParam("file") MultipartFile file, Authentication authentication) throws IOException {

        Optional<DocumentModel> optionalDocument = documentRepository.findById(id);
        if (optionalDocument.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        DocumentModel existingDocument = optionalDocument.get();
        DocumentModel updatedDocument = documentStorage.updateDoc(existingDocument, file);
        DocumentModel savedDocument = documentRepository.save(updatedDocument);

        return new ResponseEntity<>(savedDocument, HttpStatus.OK);
    }


    @Transactional
    @DeleteMapping("/user/deleteDocuments/{documentid}")
    public ResponseEntity<?> deleteDocument(@PathVariable("documentid") Integer id) {
        if (!documentRepository.existsBydocumentid(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        documentRepository.deleteBydocumentid(id);
        return new ResponseEntity<>("doc deleted",HttpStatus.OK);
    }





}
