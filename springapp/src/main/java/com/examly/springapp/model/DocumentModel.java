package com.examly.springapp.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DocumentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int documentid;
    public String documenttype;
    @Column(length = 2000000)
    public byte[] documentupload;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
    private int userId ;
    private String userEmail ;

    public int getDocumentid() {
        return documentid;
    }

    public void setDocumentid(int documentid) {
        this.documentid = documentid;
    }

    public String getDocumenttype() {
        return documenttype;
    }

    public void setDocumenttype(String documenttype) {
        this.documenttype = documenttype;
    }

    public byte[] getDocumentupload() {
        return documentupload;
    }

    public void setDocumentupload(byte[] documentupload) {
        this.documentupload = documentupload;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public DocumentModel(String documenttype, byte[] documentupload, int userId ) {
        this.documenttype = documenttype;
        this.documentupload = documentupload;
       this.userId= userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getUserId() {
        return userId;
    }
}