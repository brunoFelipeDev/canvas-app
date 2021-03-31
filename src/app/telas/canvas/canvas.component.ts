import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/components/card/item.service';
import { ConfigsModel } from 'src/app/components/card/model/configs.model';
import { TypeCanvas } from 'src/app/components/card/model/type.enum';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  contextAnalysis = new ConfigsModel();
  benefitsAndJustifications = new ConfigsModel();
  peoples = new ConfigsModel();
  hypothesis = new ConfigsModel();
  restrictions = new ConfigsModel();
  smart = new ConfigsModel();
  backlog = new ConfigsModel();
  experiment = new ConfigsModel();

  isAlterTitleVersion: boolean = false;
  titleVersion: string = '';

  constructor() {
    this.titleVersion = this.getTitleVersion();
  }

  ngOnInit(): void {
    this.createContextAnalysis();
    this.createBenefitsAndJustifications();
    this.createPeople();
    this.createHypotesis();
    this.createRestrictions();
    this.createSmart();
    this.createBacklog();
    this.createExperiment();
  }

  createContextAnalysis() {
    this.contextAnalysis.key = 'context';
    this.contextAnalysis.srcImg = 'assets/analysis.svg';
    this.contextAnalysis.title = 'Análise de contexto';
    this.contextAnalysis.type = TypeCanvas.EXPLORACAO;
  }

  createBenefitsAndJustifications() {
    this.benefitsAndJustifications.key = 'benefist';
    this.benefitsAndJustifications.srcImg = 'assets/like.svg';
    this.benefitsAndJustifications.title = 'Benefícios e justificativas';
    this.benefitsAndJustifications.type = TypeCanvas.EXPLORACAO;
  }

  createPeople() {
    this.peoples.key = 'peoples';
    this.peoples.srcImg = 'assets/people.svg';
    this.peoples.title = 'Personas';
    this.peoples.type = TypeCanvas.EXPLORACAO;
  }

  createHypotesis() {
    this.hypothesis.key = 'hypothesis';
    this.hypothesis.srcImg = 'assets/path.svg';
    this.hypothesis.title = 'Hipóteses';
    this.hypothesis.type = TypeCanvas.EXPLORACAO;
  }

  createRestrictions() {
    this.restrictions.key = 'restrictions';
    this.restrictions.srcImg = 'assets/restriction.svg';
    this.restrictions.title = 'Premissas e restrições';
    this.restrictions.type = TypeCanvas.SOLUCAO;
  }

  createSmart() {
    this.smart.key = 'smart';
    this.smart.srcImg = '/assets/target.svg';
    this.smart.title = 'Objetivo S.M.A.R.T';
    this.smart.type = TypeCanvas.SOLUCAO;
  }

  createBacklog() {
    this.backlog.key = 'backlog';
    this.backlog.srcImg = '/assets/backlog.svg';
    this.backlog.title = 'Backlog';
    this.backlog.type = TypeCanvas.SOLUCAO;
  }

  createExperiment() {
    this.experiment.key = 'experiment';
    this.experiment.srcImg = '/assets/puzzle.svg';
    this.experiment.title = 'Área de experimentação';
    this.experiment.type = TypeCanvas.EXPERIMENTO;
  }

  getTitleVersion() {
    return localStorage.getItem('titleVersion') || '';
  }

  saveTitleVersion() {
    localStorage.setItem('titleVersion', this.titleVersion!)
    this.isAlterTitleVersion = false;
  }
}