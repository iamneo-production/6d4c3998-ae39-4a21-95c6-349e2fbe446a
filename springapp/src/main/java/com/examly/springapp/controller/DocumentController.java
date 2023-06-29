package com.examly.springapp.controller;

import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.repository.DocumentRepository;
import com.examly.springapp.service.DocumentStorage;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
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
    public ResponseEntity<ByteArrayResource> getDocuments(Authentication authentication) {

        String useremail = authentication.getName();

        DocumentModel document = documentStorage.getDocumentByUser(useremail);

        if (document != null) {
            byte[] documentContent = document.getDocumentupload();

            String contentType = document.getDocumenttype();

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; fileid=\"" + document.getDocumentid() + "\"")
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(new ByteArrayResource(documentContent));
        } else {
            return ResponseEntity.notFound().build();
        }
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