package com.examly.springapp.service;


import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.model.UserProfileModel;
import com.examly.springapp.repository.DocumentRepository;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.UserProfileModelRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class DocumentStorage {
    @Autowired
    DocumentRepository documentRepository;

    @Autowired
    UserModelRepository userModelRepository;
    @Autowired
    UserProfileModelRepository userProfileModelRepository;
    public DocumentModel saveDoc(MultipartFile file, String username){
       // String docname = file.getOriginalFilename();
        try{
            UserProfileModel userProfile = userProfileModelRepository.findByEmail(username);
            DocumentModel document = new DocumentModel();
            document.setDocumenttype(file.getContentType());
            document.setDocumentupload(file.getBytes());
            // user id from profile table
            document.setUserEmail(userProfile.getEmail());
            document.setUserId(userProfile.getUserId());
            return documentRepository.save(document);

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
    public Optional<DocumentModel> getFile(Integer fileId){
        return documentRepository.findById(fileId);
    }
    public List<DocumentModel> getAllFiles(){
        return documentRepository.findAll();
    }
    public DocumentModel updateDoc(DocumentModel document, MultipartFile file) throws IOException {
        String docName = file.getOriginalFilename();
        try {
            document.setDocumenttype(file.getContentType());
            document.setDocumentupload(file.getBytes());
            return documentRepository.save(document);
        } catch (IOException e) {
            throw new IOException("Failed to update the document:  " + docName, e);
        }
    }

    public List<DocumentModel> getDocumentByUser(String username) {
       // UserModel user = userModelRepository.findByUsername(username);
        return documentRepository.findByUserEmail(username);
    }
}
